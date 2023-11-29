
/**
 * @author RRG
 */

export class UserDto {
  id: number;
  name: string;
  last_name: string;
  document_type: string;
  status: boolean;
  document: string;
  email: string;
  password: string;
  phone: string;
  language: string;
  image: string;
  token: string;
  push_token: string;
  pin_code: number;
  token_timestamp_valid: string;
  created_at: Date;
  updated_at: Date;
  notification: boolean;
  guest: boolean;
  app_password: string
}
