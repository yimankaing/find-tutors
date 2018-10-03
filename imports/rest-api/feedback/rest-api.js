import {FEEDBACK} from "./methods";

import {CODE} from "../code";

JsonRoutes.add("get", "/find_feedback/:selector/:options", function (req, res, next) {
  res.charset = "utf-8";
  const selector = req.params.selector ? JSON.parse(req.params.selector) : {};
  const options = req.params.options ? JSON.parse(req.params.options) : {};
  let data = {};
  data.result = FEEDBACK.findFeedback(selector, options);
  data.code = CODE.OK;
  JsonRoutes.sendResult(res, {
    data: data
  });
});

// JsonRoutes.add("get", "/findOne_feedback/:selector/:options", function (req, res, next) {
//   res.charset = "utf-8";
//   const selector = req.params.selector ? JSON.parse(req.params.selector) : {};
//   const options = req.params.options ? JSON.parse(req.params.options) : {};
//   let data = {};
//   data.result = FEEDBACK.findOneFeedback(selector, options);
//   data.code = CODE.OK;
//   JsonRoutes.sendResult(res, {
//     data: data
//   });
// });

JsonRoutes.add("post", "/insert_feedback", function (req, res, next) {
  res.charset = "utf-8";
  const doc = req.body;

  FEEDBACK.insertFeedback(doc, (error, result) => {
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

JsonRoutes.add("post", "/update_feedback/:selector/:options", function (req, res, next) {
  res.charset = "utf-8";
  const selector = req.params.selector ? JSON.parse(req.params.selector) : {};
  const modifier = req.body;
  const options = req.params.options ? JSON.parse(req.params.options) : {};
  FEEDBACK.updateFeedback(selector, modifier, options, (error, result) => {
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

JsonRoutes.add("get", "/remove_feedback/:selector", function (req, res, next) {
  res.charset = "utf-8";
  const selector = req.params.selector ? JSON.parse(req.params.selector) : {};

  FEEDBACK.removeFeedback(selector, (error, result) => {
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
