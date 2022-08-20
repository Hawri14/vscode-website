import { Post } from "./entities/Post";
import { __prod__ } from "./constants";

export default {
    entities: [Post],
    dbName: 'webdb',
    type: 'postgresql',
    debug: !__prod__,
} as const;