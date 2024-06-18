import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tanmay958:Q+may05982@tanmaydatabases.ib5c9dg.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=TanmayDatabases"
    );
    console.log("connected to mongodb");
  } catch (error) {
    console.log("error connecting", error.message);
  }
};
export default connectToDB;
