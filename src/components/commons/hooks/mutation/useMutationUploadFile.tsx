import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
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

interface IUploadFileArgs {
  idx: number;
  images: Record<number, string>;
  setImages: Dispatch<SetStateAction<Record<number, string>>>;
}

interface IUseMutationUploadFile {
  uploadFile: (
    args: IUploadFileArgs
  ) => (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
}

export const UseMutationUploadFile = (): IUseMutationUploadFile => {
  const [mutation] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const uploadFile =
    (args: IUploadFileArgs) => async (event: ChangeEvent<HTMLInputElement>) => {
      try {
        const file = event.currentTarget.files?.[0];
        if (file === undefined) return;

        const result = await mutation({
          variables: {
            file,
          },
        });

        args.setImages((prev) => ({
          ...prev,
          [args.idx]: result.data?.uploadFile.url ?? "",
        }));

        if (Object.values(args.images).length - 1 === args.idx) {
          args.setImages((prev) => ({ ...prev, [args.idx + 1]: "" }));
        }
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
