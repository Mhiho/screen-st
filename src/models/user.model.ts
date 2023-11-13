import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 4,
    },
    subscription: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = model('user', UserSchema);
