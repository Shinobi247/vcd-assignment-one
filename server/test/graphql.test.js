"use strict";

const request = require("supertest");
const assert = require("chai").assert;
const app = require("../app");

describe("test graphql data", function () {
  it("graphql data", function (done) {
    const res = request(app)
      .post("/graphql?")
      .set("Content-Type", "application/json")
      .send({
        query:
          "\n    {\n      getAllCars {\n        year,\nmake,\nmodel,\ncategory,\npicture,\nobjectId,\ncreatedAt,\nupdatedAt\n      }\n    }\n    "
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, function (err, res) {
        if (err) {
          return done(err);
        }

        assert.isArray(res._body.data.getAllCars);
        done();
      });
  }).timeout(15000);

  xit("graphql data 2", function (done) {});
});
