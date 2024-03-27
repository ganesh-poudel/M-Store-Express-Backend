import { NotFoundError } from '../errors/ApiError';
import User, { UserDocument } from '../model/UserModel';

const getAllUsers = async (): Promise<UserDocument[]> => {
  return await User.find();
};

// Will be adding error handling (20.03.2024)
const getUserById = async (id: string): Promise<UserDocument> => {
  const foundUser = await User.findById(id);
  if (foundUser) {
    return foundUser;
  }
  throw new NotFoundError('Not found user');
};

const createUser = async (user: UserDocument): Promise<UserDocument> => {
  return await user.save();
};

const deleteUser = async (id: string): Promise<UserDocument> => {
  const foundUser = await User.findByIdAndDelete(id);
  if (foundUser) {
    return foundUser;
  }
  throw new NotFoundError();
};

const updateUser = async (id: string, newInformation: Partial<UserDocument>): Promise<UserDocument> => {
  const updatedUser = await User.findByIdAndUpdate(id, newInformation, {
    new: true,
  });
  if (updatedUser) {
    return updatedUser;
  }
  throw new NotFoundError();
};

// #Woong
const getUserByEmail = async (email: string): Promise<UserDocument | null> => {
  return await User.findOne({ email });
}

// #Woong
const resetPassword = async (user: UserDocument): Promise<UserDocument | null> => {
  return await user.save();
}

export default { 
  getAllUsers, 
  getUserById, 
  createUser, 
  deleteUser, 
  updateUser, 
  resetPassword,
  getUserByEmail
};
