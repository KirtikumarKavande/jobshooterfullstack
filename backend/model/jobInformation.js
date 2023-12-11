const mongoose = require("mongoose");

const Schema =  mongoose.Schema;

const jobPostInformationByRecruiter = new Schema({
    jobTitle:{type:String},
    companyName:{type:String},
    jobLocation:{type:String},
    workplaceType:{type:String},
    workType:{type:String},
    experienceRange:{type:String},
    salaryRange:{type:String},
    skills:{type:Array},
    jobDescription:{type:String},
});

module.exports = mongoose.model(
  "jobPostInformationByRecruiter",
  jobPostInformationByRecruiter
);
