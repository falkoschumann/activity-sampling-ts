// Copyright (c) 2024 Falko Schumann. All rights reserved. MIT license.

import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';

// TODO Create class Duration similar to class Date
// TODO Validate objects

/** A duration in number of seconds. */
export type Duration = number;

export class RecentActivities {
  @ValidateNested() readonly lastActivity?: Activity;
  @IsNotEmpty() @ValidateNested() readonly workingDays: WorkingDay[];
  @IsNotEmpty() @ValidateNested() readonly timeSummary: TimeSummary;
}

export class Activity {
  @IsNotEmpty() @IsDate() timestamp: Date;

  @IsNotEmpty() @IsInt() readonly duration: Duration;

  @IsNotEmpty() @IsString() readonly client: string;

  @IsNotEmpty() @IsString() readonly project: string;

  @IsNotEmpty() @IsString() readonly task: string;

  @IsString() readonly notes?: string;
}

export class WorkingDay {
  @IsNotEmpty() @IsDate() readonly date: Date;

  @IsNotEmpty() readonly activities: Activity[];
}

export class TimeSummary {
  @IsNotEmpty() @IsInt() readonly hoursToday: Duration;
  @IsNotEmpty() @IsInt() readonly hoursYesterday: Duration;
  @IsNotEmpty() @IsInt() readonly hoursThisWeek: Duration;
  @IsNotEmpty() @IsInt() readonly hoursThisMonth: Duration;
}
