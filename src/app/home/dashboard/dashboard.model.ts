export interface Dashboard {
  _id: string;
  date: Date;
  time: Date;
  opponent: string;
  homeScore: number;
  awayScore: number;
  homeTeamAbbrev: string;
  awayTeamAbbrev: string;
  attendance: boolean;
}
