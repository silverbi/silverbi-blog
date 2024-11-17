"use client";

import Text from "@/components/atoms/Text";
import { Colors, Typography } from "@styles/themes/types";
import CustomImage from "@/components/atoms/CustomImage";
import { ImageTypes } from "@/components/atoms/CustomImage/types";
import { LoginForm } from "@/components/organisms/LoginForm";

const AuthCodeError = () => {
  return (
    <div className={"flex h-full w-full flex-col items-center justify-center gap-10"}>
      <CustomImage tag={ImageTypes.ERROR_BACKGROUND} fill className={"-z-10 object-cover"} />

      <div className={"flex h-fit w-full flex-col items-center justify-center"}>
        <Text color={Colors.CONTENT_INVERSE_1} type={Typography.HEAD_1} bold>
          ERROR
        </Text>
        <Text color={Colors.CONTENT_INVERSE_1}>알 수 없는 오류가 발생했습니다. 로그인을 다시 시도해 주세요.</Text>
      </div>
      <LoginForm />
      <a href={"/"} className={"h-fit cursor-pointer border-b border-b-background-1"}>
        <Text color={Colors.CONTENT_INVERSE_1} type={Typography.BODY_2}>
          홈으로 돌아가기
        </Text>
      </a>
    </div>
  );
};

export default AuthCodeError;
