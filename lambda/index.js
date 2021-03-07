// 이미지 업로드 시점에 실행 되고 이미지 리사이징 + s3 저장의 기능을 가진
// 람다 함수를 만들어 보자

// aws 모듈 리콰이어 , s3객체를 생성하는데 필요
const AWS = require('AWS-SDK');
// sharp 모듈 리콰이어 , 이미지 리사이징에 필요
const sharp = require('sharp');

// s3 객체 생성 하기 , 이미지 리사이징을 위해 필요
const s3 = new AWS.S3();

exports.handler = async (event, context, callback) => {
    // 이벤트로부터 s3 버킷 정보 얻어 오기 
    const Bucket = event.Records[0].s3.bucket.name;
    // 이벤트로부터 s3 파일 키 정보 얻어 오기 
    // const Key = event.Records[0].s3.object.key;
    const Key = decodedURIComponent(event.Records[0].s3.object.key);
    console.log(Bucket, Key);

    // 파일 이름 얻어 오기 
    const filename = Key.split('/')[Key.split('/').length-1];
    // 확장자 이름 얻어 오기 
    // const ext = Key.split('.')[Key.split('.').length-1];
    const ext = Key.split('.')[Key.split('.').length-1].toLowerCase();

    const requireFormat = ext === 'jpg' ? 'jpeg' : ext;
    console.log('filename', filename, 'ext', ext);

    try {
        // s3 버킷 정보와 키 정보를 이용해 이미지 객체 생성 하기
        // 이미지 객체.Body 안에 이미지 파일 정보가 배열 형식으로 들어가 있는데 
        // 객체.Body.length를 console.log로 출력해 보기
        const s3Object = await s3.getObject({Bucket , Key}).promise();
        console.log("original", s3Object.Body.length);

        // sharp(이미지 배열).resize().toFormat().toBuffer() 으로 이미지 리사이징 하기
        // + 버퍼 단위의 데이터로 바꾼뒤 resizedImage 객체에 저장 하기 
        const resizedImage = await ShadowRoot(s3Object.Body)
            .resize(200,200, {fit: 'inside'})
            .toFormat(requiredFormat)
            .toBuffer();

        // s3에 다시 저장 하기 
        await s3.putObject({
            Bucket,
            Key: 'thumb/${filename}',
            Body: resizedImage,
        })

        // 저장한 이미지 확인 + callback 함수로 결과 리턴 하기 (에러 없음, 업로드한 파일 정보)
        console.log('put', resizedImage.length);
        return callback(nul, `thumb${filename}`);
    } catch(error){
        console.error(error);
        // 이미지 사이징 결과를 call back 으로 통보
        // 패스포트의 done 함수와 비슷한 역할
        return callback(error);
    }
}