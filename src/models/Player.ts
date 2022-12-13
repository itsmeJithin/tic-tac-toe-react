import PlayerStatistics from "./PlayerStatistics";

export interface Player {
    /**
     * player unique id
     */
    id?: number;

    /**
     * Player name
     */
    name?: String;

    /**
     * player game statistics
     */
    statistics?: PlayerStatistics[]
}

export default Player;