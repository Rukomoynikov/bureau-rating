export interface Student {
  uid:                      string;
  english_name:             string;
  weeks:                    Week[];
  started_at:               Date;
  name:                     string;
  gender:                   Gender;
  photo:                    null;
  job:                      string;
  organization:             null | string;
  enrollment_status:        EnrollmentStatus;
  enrollment_granted:       boolean;
  is_new:                   boolean;
  is_certification_started: boolean;
  city:                     string;
  country:                  string;
  diploma_title:            null;
  diploma_url:              null;
  diploma_score:            null;
  diploma_art_director:     null;
  diploma_patron:           null;
  diploma_designers:        null;
  diploma_editors:          null;
  diploma_managers:         null;
}

export interface StudentWithAddings extends Student {
  totalScore: number
}

export enum EnrollmentStatus {
  Active = "active",
  Cancelled = "cancelled",
  Failed = "failed",
  Paused = "paused",
}

export enum Gender {
  Female = "female",
  Male = "male",
  Unknown = "unknown",
}

export interface Week {
  score:   number;
  details: Detail[];
  rank:    number;
  diff:    number;
}

export interface Detail {
  course:        Course;
  score:         number;
  met_deadlines: boolean;
}

export enum Course {
  Bonus = "bonus",
  Clients = "clients",
  Data = "data",
  Fff = "fff",
  Prep = "prep",
  Prototyping = "prototyping",
  Text = "text",
  Typography = "typography",
  UI = "ui",
}