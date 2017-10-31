import express from 'express';
import {MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;

/*initialing the db connection*/
MongoClient.connect(config.mongodbUri,(err, db) => {
  assert.equal(null, err);
  mdb = db;
});

const router = express.Router();

router
  .get('/contests', (req, res) => {
    let contests = {};

    mdb.collection('contests').find({})
      .project({
        categoryName: 1,
        contestName: 1
      })
      .each((err, contest) => {
        assert.equal(null, err);
        if(!contest) {
          res.send({contests});
          return;
        }
        contests[contest._id] = contest;
      });
  });

router
  .get('/contests/:contestId', (req, res) =>{
    mdb.collection('contests')
      .findOne({_id: ObjectID(req.params.contestId)})
      .then(contest => res.send(contest))
      .catch(console.error);
  });

router
  .get('/names/:nameIds', (req, res) => {
    let names = {};
    const nameIds = req.params.nameIds.split(',').map(ObjectID);

    mdb.collection('names').find({_id: {$in: nameIds}})
      .each((err, name) => {
        assert.equal(null, err);

        if(!name) {
          res.send({names});
          return;
        }
        names[name._id] = name;
      });
  });

router
  .get('/names',  (req, res) => {
    let names = {};
    mdb.collection('names')
      .find({})
      .each((err, name) => {
        assert.equal(null, err);

        if(!name) {
          res.send({names});
          return;
        }
        names[name._id] = name;
      });
  });

router
  .post('/names', (req, res) => {
    const contestId = ObjectID(req.body.contestId);
    const name = req.body.newName;
    // validation ...
    mdb.collection('names').insertOne({ name }).then(result =>
      mdb.collection('contests').findAndModify(
        { _id: contestId },
        [],
        { $push: { nameIds: result.insertedId } },
        { new: true }
      ).then(doc =>
        res.send({
          updatedContest: doc.value,
          newName: { _id: result.insertedId, name }
        })
      )
    )
  .catch(error => {
    console.error(error);
    res.status(404).send('Bad Request');
  });
});

router
  .get('/blogs',  (req, res) => {
    let blogs = {};
    blogs[ObjectID("59f6c447a835cfdd1817431e")] = {
      _id: ObjectID("59f6c447a835cfdd1817431e"),
      Title: "My Awesome History",
      Date: new Date("10/31/2017"),
      ShortDescription: "Time ago when I was just a little boy, having aventures over the forest, jumping and getting over...",
      Thumbnail: "",
      Tags: ["Time ago", "My", "Awesome", "History", "My Awesome History"],
      UserId: ObjectID("59f6c447a835cfdd1817432e")
    };
    mdb.collection('blogs')
      .find({})
      .project({
        Title: 1,
        Thumbnail: 1,
        ShortDescription: 1,
        EditedDate: 1,
        UserId:1
      })
      .each((err, blog) => {
        assert.equal(null, err);

        if(!blog) {
          res.send({blogs});
          return;
        }
        blogs[blog._id] = blog;
      });
  });

router
  .get('/blogs/:blogId',  (req, res) => {
    let blogs = {};
    mdb.collection('blogs')
      .find({_id: req.params.blogId})
      .each((err, blog) => {
        assert.equal(null, err);

        if(!blog) {
          res.send({blogs});
          return;
        }
        blogs[blog._id] = blog;
      });
  });

export default router;
