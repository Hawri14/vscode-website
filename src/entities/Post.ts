import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Post {

  @PrimaryKey()
  id!: number;

  @Property()
  createdAt = new Date();

  //Hook that creates date whenever we update
  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();
//@property makes it into a DB column
  @Property()
  title!: string;
  }