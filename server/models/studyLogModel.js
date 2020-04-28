import { Schema } from "mongoose";

const studyLogSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const StudyLog = mongoose.model("StudyLog", studyLogSchema);

module.exports = StudyLog;
