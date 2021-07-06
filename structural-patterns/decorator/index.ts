import { Breathe, Dance, PlaySoccer, Walk } from "./decorator";

const baseSkill = new Breathe();
console.log(baseSkill.play());

const dancingSkill = new Dance(baseSkill);
console.log(dancingSkill.play());

const dancingAndWalkingSkill = new Walk(dancingSkill);
console.log(dancingAndWalkingSkill.play());

const walkingAndPlayingSoccerSkill = new PlaySoccer(new Walk(baseSkill));
console.log(walkingAndPlayingSoccerSkill.play());