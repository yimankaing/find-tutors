import SimpleSchema from "simpl-schema";

export default new SimpleSchema({
  khName: {
    type: String,
    optional: true
  },
  enName: {
    type: String,
    optional: true
  },
  gender: {
    type: String,
    optional: true
  },
  dob: {
    type: Date,
    optional: true
  },
  password: {
    type: String
  },
  photo: {
    type: String
  },
  email: {
    type: String,
    optional: true
  },
  address: {
    type: String,
    optional: true
  },
  location: {
    type: Object,
    optional: true
  },
  "location.longitude": { type: String },
  "location.latitude": { type: String },
  phoneNumber: {
    type: String,
    optional: true
  },
  // termAndCondition: {
  //   type: Boolean
  // },
  createdDate: {
    type: Date,
    optional: true
  }
});
