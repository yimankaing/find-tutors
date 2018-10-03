import { USER } from "./methods";
import {CODE} from '../code';

JsonRoutes.add("get", "/find_user/:selector/:options", function (req, res, next) {
  res.charset = "utf-8";
  const selector = req.params.selector ? JSON.parse(req.params.selector) : {};
  const options = req.params.options ? JSON.parse(req.params.options) : {};
  let data = {};
  data.result = USER.findUser(selector, options);
  data.code = CODE.OK;
  JsonRoutes.sendResult(res, {
    data: data
  });
});

// JsonRoutes.add("get", "/findOne_user/:selector/:options", function (req, res, next) {
//   res.charset = "utf-8";
//   const selector = req.params.selector ? JSON.parse(req.params.selector) : {};
//   const options = req.params.options ? JSON.parse(req.params.options) : {};
//   let data = {};
//   data.result = USER.findOneUser(selector, options);
//   data.code = CODE.OK;
//   JsonRoutes.sendResult(res, {
//     data: data
//   });
// });

JsonRoutes.add("post", "/insert_user", function (req, res, next) {
  res.charset = "utf-8";
  const doc = req.body;
  USER.insertUser(doc, (error, result) => {
    let data = {};
    if (error) {
      data.code = CODE.FORBIDDEN;
      data.msg = error.message;
      data.result = "";
    } else {
      data.code = CODE.CREATED;
      data.result = result;
    }
    JsonRoutes.sendResult(res, {
      data: data
    });
  });
});

JsonRoutes.add("post", "/update_user/:selector", function (req, res, next) {
  res.charset = "utf-8";
  const selector = req.params.selector ? JSON.parse(req.params.selector) : {};
  const modifier = req.body;

  USER.updateUser(selector, modifier, (error, result) => {
    let data = {};
    if (error) {
      data.code = CODE.FORBIDDEN;
      data.msg = error.message;
      data.result = "";
    } else {
      data.code = result ? CODE.CREATED : CODE.NOT_MODIFIED;
      data.result = result;
    }
    JsonRoutes.sendResult(res, {
      data: data
    });
  });
});

JsonRoutes.add("get", "/remove_user/:selector", function (req, res, next) {
  res.charset = "utf-8";
  const selector = req.params.selector ? JSON.parse(req.params.selector) : {};

  USER.removeUser(selector, (error, result) => {
    let data = {};
    if (error) {
      data.code = CODE.FORBIDDEN;
      data.msg = error.message;
      data.result = "";
    } else {
      data.code = result ? CODE.CREATED : CODE.NOT_MODIFIED;
      data.result = result;
    }
    JsonRoutes.sendResult(res, {
      data: data
    });
  });
});
