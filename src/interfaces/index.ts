import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  HTMLInputTypeAttribute,
  ReactElement,
} from "react";

export interface UserCredentials {
  email: string;
  password: string;
}

export interface LoginFormProps extends Partial<UserCredentials> {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  children: ReactElement | ReactElement[];
}

export interface LoginFormFieldProps extends Partial<LoginFormProps> {
  type: HTMLInputTypeAttribute;
  name: string;
  value: string;
}

export interface LoginMessages {
  message: { error: string; success: string };
}

export interface User {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: {
    street: string;
    suite: string;
  };
}

export interface UsersTableProps {
  children: ReactElement | ReactElement[];
}

export interface UsersListProps {
  users: User[];
}
