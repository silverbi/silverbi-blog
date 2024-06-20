import AWS from "aws-sdk";

const region = process.env.NEXT_PUBLIC_AWS_REGION;
const accessKeyId = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY;
const bucketName = process.env.NEXT_PUBLIC_S3_BUCKET_NAME;

if (!region || !accessKeyId || !secretAccessKey || !bucketName) {
  throw new Error("AWS 환경 변수가 설정되지 않았습니다.");
}

AWS.config.update({
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
  region: region,
});

const s3 = new AWS.S3();
export { s3, bucketName };
