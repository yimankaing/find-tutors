import {TEACHER} from "./methods";

import {CODE} from "../code";

JsonRoutes.add("get", "/find_teacher/:selector/:options", function (req, res, next) {
  res.charset = "utf-8";
  const selector = req.params.selector ? JSON.parse(req.params.selector) : {};
  const options = req.params.options ? JSON.parse(req.params.options) : {};
  let data = {};
  data.result = TEACHER.findTeacher(selector, options);
  data.code = CODE.OK;
  JsonRoutes.sendResult(res, {
    data: data
  });
});

JsonRoutes.add("get", "/findOne_teacher/:selector/:options", function (req, res, next) {
  res.charset = "utf-8";
  const selector = req.params.selector ? JSON.parse(req.params.selector) : {};
  const options = req.params.options ? JSON.parse(req.params.options) : {};
  let data = {};
  data.result = TEACHER.findOneTeacher(selector, options);
  data.code = CODE.OK;
  JsonRoutes.sendResult(res, {
    data: data
  });
});

JsonRoutes.add("get", "/insert_teacher/:doc", function (req, res, next) {
  res.charset = "utf-8";
  const doc = req.params.doc ? JSON.parse(req.params.doc) : {};

  TEACHER.insertTeacher(doc, (error, result) => {
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

JsonRoutes.add("get", "/update_teacher/:selector/:modifier/:options", function (req, res, next) {
  res.charset = "utf-8";
  const selector = req.params.selector ? JSON.parse(req.params.selector) : {};
  const modifier = req.params.modifier ? JSON.parse(req.params.modifier) : {};
  const options = req.params.options ? JSON.parse(req.params.options) : {};
  TEACHER.updateTeacher(selector, modifier, options, (error, result) => {
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

JsonRoutes.add("get", "/remove_teacher/:selector", function (req, res, next) {
  res.charset = "utf-8";
  const selector = req.params.selector ? JSON.parse(req.params.selector) : {};

  TEACHER.removeTeacher(selector, (error, result) => {
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
