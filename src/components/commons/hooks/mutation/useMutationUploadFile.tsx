import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

interface IUseMutationUploadFile {
  uploadFile: (images: Record<string, string>) => Promise<string[] | undefined>;
}

export const UseMutationUploadFile = (): IUseMutationUploadFile => {
  const [mutation] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const uploadFile = async (
    images: Record<string, string>
  ): Promise<string[] | undefined> => {
    try {
      // 이미지 저장용 DB에 저장후 다운로드 주소를 반환
      const resultUrls = await Promise.all(
        Object.values(images).map(async (el) => {
          if (typeof el === "string") {
            return el;
          } else {
            const result = await mutation({ variables: { file: el } });
            return result.data?.uploadFile.url;
          }
        })
      );
      const filteredResultUrls = resultUrls.filter(
        (el) => el !== undefined
      ) as string[];
      return filteredResultUrls;
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: "확인후 다시 시도해 주세요",
          okButtonProps: {
            style: { backgroundColor: "black", color: "white" },
          },
        });
    }
  };

  return { uploadFile };
};
