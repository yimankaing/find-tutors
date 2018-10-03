import {RATE} from "./methods";

import {CODE} from "../code";

JsonRoutes.add("get", "/find_rate/:selector/:options", function (req, res, next) {
  res.charset = "utf-8";
  const selector = req.params.selector ? JSON.parse(req.params.selector) : {};
  const options = req.params.options ? JSON.parse(req.params.options) : {};
  let data = {};
  data.result = RATE.findRate(selector, options);
  data.code = CODE.OK;
  JsonRoutes.sendResult(res, {
    data: data
  });
});

// JsonRoutes.add("get", "/findOne_rate/:selector/:options", function (req, res, next) {
//   res.charset = "utf-8";
//   const selector = req.params.selector ? JSON.parse(req.params.selector) : {};
//   const options = req.params.options ? JSON.parse(req.params.options) : {};
//   let data = {};
//   data.result = RATE.findOneRate(selector, options);
//   data.code = CODE.OK;
//   JsonRoutes.sendResult(res, {
//     data: data
//   });
// });

JsonRoutes.add("post", "/insert_rate", function (req, res, next) {
  res.charset = "utf-8";
  const doc = req.body;

  RATE.insertRate(doc, (error, result) => {
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

JsonRoutes.add("post", "/update_rate/:selector/:options", function (req, res, next) {
  res.charset = "utf-8";
  const selector = req.params.selector ? JSON.parse(req.params.selector) : {};
  const modifier = req.body;
  const options = req.params.options ? JSON.parse(req.params.options) : {};
  RATE.updateRate(selector, modifier, options, (error, result) => {
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

JsonRoutes.add("get", "/remove_rate/:selector", function (req, res, next) {
  res.charset = "utf-8";
  const selector = req.params.selector ? JSON.parse(req.params.selector) : {};

  RATE.removeRate(selector, (error, result) => {
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
