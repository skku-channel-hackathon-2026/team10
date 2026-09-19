import type { TutorialWamData } from '@tutorial/shared'

// Only true under the Vite dev server (`pnpm dev:wam`). Production builds
// replace import.meta.env.DEV with false, so the mock is stripped from the
// bundle that Workers serves to Desk.
export const isMockWam = import.meta.env.DEV

// Fake host data so the WAM renders outside Channel Desk during local UI work.
export const mockWamData: TutorialWamData = {
  appId: 'local-mock-app',
  channelId: 'local-mock-channel',
  managerId: 'local-mock-manager',
  chatId: 'local-mock-group',
  chatType: 'group',
  chatTitle: '앱_개발_검증 (mock)',
  broadcast: false,
  message: 'This is a test message sent by a manager.',
  targetToken: 'local-mock-target-token',
}
