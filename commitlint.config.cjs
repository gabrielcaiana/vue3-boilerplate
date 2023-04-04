// commitlint.config.js
// emojis like "✅ ", "😂 ", ...
const matchAnyEmojiWithSpaceAfter
  = /(\p{Emoji_Presentation}|\p{Extended_Pictographic})?\s?/
const matchOptionalTicketNumberWithSpaceAfter = /(?:\[(T-\d+)\]\s)?/ // "[T-4605] ", "[T-1]"
const subjectThatDontStartWithBracket = /([^\[].+)/ // "Add tests" but don't allow "[ Add tests"

module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: new RegExp(
        `^${
        matchAnyEmojiWithSpaceAfter.source
        }${matchOptionalTicketNumberWithSpaceAfter.source
        }${subjectThatDontStartWithBracket.source
        }$`,
      ),
      headerCorrespondence: ['emoji', 'ticket', 'subject'],
    },
  },
  plugins: [
    {
      rules: {
        'header-match-team-pattern': (parsed) => {
          const { emoji, ticket, subject } = parsed
          if (emoji === null && ticket === null && subject === null) {
            return [
              false,
              'header must be in format \'✅ [T-4605] Add tests\' or \'✅ Add tests\'',
            ]
          }
          return [true, '']
        },
        'explained-emoji-enum': (parsed, _when, emojisObject) => {
          const { emoji } = parsed
          if (emoji && !Object.keys(emojisObject).includes(emoji)) {
            return [
              false,
              `emoji must be one of:
${Object.keys(emojisObject)
                .map(emojiType => `${emojiType} - ${emojisObject[emojiType]}`)
                .join('\n')}`,
            ]
          }
          return [true, '']
        },
      },
    },
  ],
  rules: {
    'header-match-team-pattern': [2, 'always'],
    'explained-emoji-enum': [
      2,
      'always',
      {
        '🎨': 'Improve structure / format of the code.',
        '⚡️': 'Improve performance.',
        '🔥': 'Remove code or files.',
        '🐛': 'Fix a bug.',
        '🚑️': 'Critical hotfix.',
        '📝': 'Add or update documentation.',
        '🚀': 'Deploy stuff.',
        '💄': 'Add or update the UI and style files.',
        '🎉': 'Begin a project.',
        '✅': 'Add, update, or pass tests.',
        '🔒️': 'Fix security issues.',
        '🔐': 'Add or update secrets.',
        '🔖': 'Add or update secrets.',
        '🚨': 'Fix compiler / linter warnings.',
        '🚧': 'Work in progress.',
        '💚': 'Fix CI Build.',
        '⬇️': 'Downgrade dependencies.',
        '⬆️': 'Upgrade dependencies.',
        '📌': 'Pin dependencies to specific versions.',
        '👷': 'Add or update CI build system.',
        '📈': 'Add or update analytics or track code.',
        '♻️': 'Refactor code.',
        '➕': 'Add a dependency.',
        '➖': 'Remove a dependency.',
        '🔧': 'Add or update configuration files.',
        '🔨': 'Add or update development scripts.',
        '🌐': 'Internationalization and localization.',
        '✏️': 'Fix typos.',
        '💩': 'Write bad code that needs to be improved.',
        '⏪️': 'Revert changes.',
        '🔀': 'Merge branches.',
        '📦️': 'Add or update compiled files or packages.',
        '👽️': 'Update code due to external API changes.',
        '🚚': 'Move or rename resources (e.g.: files, paths, routes).',
        '📄': 'Add or update license.',
        '💥': 'Introduce breaking changes.',
        '🍱': 'Add or update assets.',
        '♿️': 'Improve accessibility.',
        '💡': 'Add or update comments in source code.',
        '🍻': 'Write code drunkenly.',
        '💬': 'Add or update text and literals.',
        '🗃️': 'Perform database related changes.',
        '🔊': 'Add or update logs.',
        '🔇': 'Remove logs.',
        '👥': 'Add or update contributor(s).',
        '🚸': 'Improve user experience / usability.',
        '🏗️': 'Make architectural changes.',
        '📱': 'Work on responsive design.',
        '🤡': 'Mock things.',
        '🥚': 'Add or update an easter egg.',
        '🙈': 'Add or update a .gitignore file.',
        '📸': 'Add or update snapshots.',
        '⚗️': 'Perform experiments.',
        '🔍️': 'Improve SEO.',
        '🏷️': 'Add or update types.',
        '🌱': 'Add or update seed files.',
        '🚩': 'Add, update, or remove feature flags.',
        '🥅': 'Catch errors.',
        '💫': 'Add or update animations and transitions.',
        '🗑️': 'Deprecate code that needs to be cleaned up.',
        '🛂': 'Work on code related to authorization, roles and permissions.',
        '🩹': 'Simple fix for a non-critical issue.',
        '🧐': 'exploration/inspection.',
        '⚰️': 'Remove dead code.',
        '🧪': 'Add a failing test.',
        '👔': 'Add or update business logic.',
        '🩺': 'Add or update healthcheck.',
        '🧱': 'Infrastructure related changes.',
        '🧑‍💻': 'Improve developer experience.',
        '💸': 'Add sponsorships or money related infrastructure.',
        '🧵': 'Add or update code related to multithreading or concurrency.',
        '🦺': 'Add or update code related to validation.',
      },
    ],
  },
}
