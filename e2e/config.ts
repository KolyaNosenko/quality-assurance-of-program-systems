require('dotenv').config();

export const config = {
  chat: {
    existedName: process.env.CREATE_CHAT_NAME || '',
  },
  user: {
    existedPhoneWithoutCode: process.env.EXISTED_USER_PHONE_WITHOUT_CODE || '',
  },
};
