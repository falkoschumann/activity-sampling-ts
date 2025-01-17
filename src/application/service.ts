import { validateSync } from 'class-validator';
import { RecentActivities } from '../domain/recent_activities';

export class Service {
  queryRecentActivities(): Promise<RecentActivities> {
    const recentActivities: RecentActivities = {
      lastActivity: {
        timestamp: new Date('2025-01-17T09:30'),
        duration: 30 * 60,
        client: 'ACME Inc.',
        project: 'Foobar',
        task: 'Do something',
      },
      workingDays: [
        {
          date: new Date('2025-01-17'),
          activities: [
            {
              timestamp: new Date('2025-01-17T09:30'),
              duration: 30 * 60,
              client: 'ACME Inc.',
              project: 'Foobar',
              task: 'Do something',
            },
          ],
        },
        {
          date: new Date('2025-01-16'),
          activities: [
            {
              timestamp: new Date('2025-01-16T17:00'),
              duration: 30 * 60,
              client: 'ACME Inc.',
              project: 'Foobar',
              task: 'Do something',
            },
            {
              timestamp: new Date('2025-01-16T16:30'),
              duration: 30 * 60,
              client: 'ACME Inc.',
              project: 'Foobar',
              task: 'Do something',
            },
            {
              timestamp: new Date('2025-01-16T16:00'),
              duration: 30 * 60,
              client: 'ACME Inc.',
              project: 'Foobar',
              task: 'Make things',
              notes: 'This is a note',
            },
          ],
        },
      ],
      timeSummary: {
        hoursToday: 30 * 60,
        hoursYesterday: 3 * 30 * 60,
        hoursThisWeek: 4 * 30 * 60,
        hoursThisMonth: 4 * 30 * 60,
      },
    };
    validateSync(recentActivities);
    return Promise.resolve(recentActivities);
  }
}
