import express from 'express';
import data from "../src/testData";

const router = express.Router();
const contests = data.contests.reduce( (obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

router
  .get('/contests', (req, res) => {
    res.send({
      contests,
    })
  })
  .get('/contests/:contestId', (req, res) =>{
    //req.params.contestId
    let contest = contests[req.params.contestId];
    res.send({
      contest: contest
    })
  });

export default router;
