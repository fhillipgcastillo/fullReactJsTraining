import express from 'express';
import {MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;

/*initialing the db connection*/
MongoClient.connect(config.mongodbUri,(err, db) => {
  assert.equal(null, err);
  mdb = db;
});

const router = express.Router();

// const contests = data.contests.reduce( (obj, contest) => {
//   obj[contest.id] = contest;
//   return obj;
// }, {});

router
  .get('/contests', (req, res) => {
    let contests = {};
    
    mdb.collection('contests').find({})
      .project({
        id: 1,
        categoryName: 1,
        contestName: 1
      })
      .each((err, contest) => {
        assert.equal(null, err);
        if(!contest) {
          res.send({contests});
          return;
        }
        contests[contest.id] = contest;
      });
  });

  router.get('/contests/:contestId', (req, res) =>{
    mdb.collection('contests')
      .findOne({id: Number(req.params.contestId)})
      .then(contest => res.send(contest))
      .catch(console.error);
  });
  
  router  .get('/names/:nameIds', (req, res) => {
    let names = {};
    const nameIds = req.params.nameIds.split(',').map(Number);
    
    mdb.collection('names').find({id: {$in: nameIds}})
      .each((err, name) => {
        assert.equal(null, err);

        if(!name) {
          res.send({names});
          return;
        }
        names[name.id] = name;
      });
  });
  
export default router;
