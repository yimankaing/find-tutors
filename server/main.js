import {Meteor} from "meteor/meteor";
import moment from 'moment';
import {Accounts} from "meteor/accounts-base";
import "./config/account";
// import './publication';
import "../imports/startup/server";
//methods
import {USER} from '../imports/rest-api/users/methods'


import {STUDENT} from '../imports/rest-api/students/methods'
import {TEACHER} from '../imports/rest-api/teachers/methods'
import {SUBJECT} from '../imports/rest-api/subjects/methods'
import {RATE} from '../imports/rest-api/rates/methods'
import {POST} from '../imports/rest-api/posts/methods'
import {FOLLOWER} from '../imports/rest-api/followers/methods'
import {FOLLOWING} from '../imports/rest-api/following/methods'
import {MESSAGE} from '../imports/rest-api/messages/methods'
import {FEEDBACK} from '../imports/rest-api/feedback/methods'
import {COMMENT} from '../imports/rest-api/comments/methods'
import {EJSON} from "meteor/ejson";


Meteor.startup(() => {
  JsonRoutes.setResponseHeaders({
    "Cache-Control": "no-store",
    Pragma: "no-cache",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, X-Requested-With"
  });

  /*creating user*/
  // USER.insertUser({
  //   username: 'yiman',
  //   password: '123456',
  //   email: 'yimankaing@gmail.com',
  //   profile:{
  //     type: 'teacher'
  //   },
  // });
  // USER.insertUser({
  //   username: 'ratanak',
  //   password: '123456',
  //   email: 'ratanak@gmail.com',
  //   profile:{
  //     type: 'student'
  //   },
  // });

  // for (let i = 1; i <= 3; i++) {
  //   if (STUDENT.findStudent().length === 0) {
  //     let doc = {
  //       _id: `00${i}`,
  //       khName: 'សួរ',
  //       enName: 'Sour',
  //       gender: 'female',
  //       dob: moment().toDate(),
  //       email: 'sour@gmail.com',
  //       address: 'battambang, cambodia',
  //       locations: {
  //         longitude: '123',
  //         latitude: '123'
  //       },
  //       phoneNumber: '0123456789',
  //       createdDate: moment().toDate()
  //     };
  //     STUDENT.insertStudent(doc);
  //   }
  //   if (TEACHER.findTeacher().length === 0) {
  //     let doc = {
  //       _id: `00${i}`,
  //       khName: 'រតនះ',
  //       enName: 'Ratanak',
  //       gender: 'male',
  //       dob: moment().toDate(),
  //       spokenLanguage: 'khmer',
  //       email: 'ratanak@gmail.com',
  //       address: 'battambang, cambodia',
  //       phoneNumber: '0123456789',
  //       type: ["private"],
  //       typeOfCard: 'typeOfCard',
  //       cardNumber: 'cardNumber',
  //       attachment: "attachment",
  //       experience: "tell experiences",
  //       status: 'status',
  //       subjectId: ['001, 002'],
  //       stars: 100,
  //       createdDate: moment().toDate()
  //     };
  //     TEACHER.insertTeacher(doc);
  //   }
  if (SUBJECT.findSubject().length === 0) {
    const data = EJSON.parse(Assets.getText("subjects.json"));
    data.forEach((o) => {
      SUBJECT.insertSubject(o);
    });
  }
  //   if (RATE.findRate().length === 0) {
  //     let doc = {
  //       _id: `00${i}`,
  //       teacherId: `00${i}`,
  //       studentId: '001',
  //       value: 1,
  //       createdAt: moment().toDate(),
  //       // updatedAt: moment().toDate()
  //     };
  //     RATE.insertRate(doc);
  //   }
  //
  //   if (POST.findPost().length === 0) {
  //     let doc = {
  //       _id: `00${i}`,
  //       like: true,
  //       likeCount: 14, //count from studentId
  //       grade: '8',
  //       photo: 'link to photos',
  //       price: 10,
  //       discount: 10,
  //       duration: 3,
  //       locations: {
  //         longitude: '123',
  //         latitude: '123'
  //       },
  //       studentLimit: 10,
  //       subjectId: '001',
  //       date: moment().toDate(),
  //       startTime: '7:00',
  //       endTime: '11:00',
  //       status: 'status',
  //       memo: 'register now for free'
  //
  //     };
  //     POST.insertPost(doc);
  //   }
  //
  //   if (FOLLOWER.findFollower().length === 0) {
  //     let doc = {
  //       _id: `00${i}`,
  //       studentId: `00${i}`,
  //       teacherId: '001',
  //       createdDate: moment().toDate()
  //
  //     };
  //     FOLLOWER.insertFollower(doc);
  //   }
  //   if (FOLLOWING.findFollowing().length === 0) {
  //     let doc = {
  //       _id: `00${i}`,
  //       studentId: `00${i}`,
  //       teacherId: '001',
  //       createdDate: moment().toDate()
  //
  //     };
  //     FOLLOWING.insertFollowing(doc);
  //   }
  //   if (MESSAGE.findMessage().length === 0) {
  //     let doc = {
  //       _id: `00${i}`,
  //       senderId: i === 2 ? '002' : '001',
  //       studentId: i === 2 ? '001' : '',
  //       teacherId: i === 2 ? '' : '002',
  //       message: i === 2 ? 'hello student' : 'hello teacher',
  //       createdDate: moment().toDate()
  //     };
  //     MESSAGE.insertMessage(doc);
  //   }
  //
  //   if (FEEDBACK.findFeedback().length === 0) {
  //     let doc = {
  //       _id: `00${i}`,
  //       studentId: `00${i}`,
  //       teacherId: '002',
  //       message: 'thanks for teaching us',
  //       createdDate: moment().toDate(),
  //
  //     };
  //     FEEDBACK.insertFeedback(doc);
  //   }
  //
  //   if (COMMENT.findComment().length === 0) {
  //     let doc = {
  //       _id: `00${i}`,
  //       postId: '001',
  //       studentId: i === 2 ? '' : `00${i}`,
  //       teacherId: i === 2 ? '001' : '',
  //       comment: i === 2 ? 'thanks for interesting' : 'i will join this class',
  //       createdDate: moment().toDate(),
  //       // updatedDate:
  //
  //     };
  //     COMMENT.insertComment(doc);
  //   }
  // }
});
