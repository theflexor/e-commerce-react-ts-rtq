import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

interface IAuthSign {
  auth: any;
  email: string;
  password: string;
}

export const useAuthSign = async ({ auth, email, password }: IAuthSign) => {
  try {
    return await (
      await createUserWithEmailAndPassword(auth, email, password)
    ).user;
  } catch (e) {
    console.log(e);
  }
};
