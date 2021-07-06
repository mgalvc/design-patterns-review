interface Skill {
  play(): string;
}

export class Breathe implements Skill {
  public play(): string {
    return "I'm breathing!";
  }
}

class SkillDecorator implements Skill {
  public constructor(
    private skill: Skill
  ) {}

  public play(): string {
    return this.skill.play();
  }
}

export class Walk extends SkillDecorator {
  public play() {
    return `${super.play()} I'm walking!`;
  }
}

export class PlaySoccer extends SkillDecorator {
  public play() {
    return `${super.play()} I'm playing soccer!`;
  }
}

export class Dance extends SkillDecorator {
  public play() {
    return `${super.play()} I'm dancing!`;
  }
}

