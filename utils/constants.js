import { getChineseNumber, getKoreanNumber } from '@/utils/functions'

export const NUMBER_TYPES = {
  KOREAN: 'korean',
  CHINESE: 'chinese'
}

export const MAX_NUMBERS = {
  [NUMBER_TYPES.KOREAN]: 99,
  [NUMBER_TYPES.CHINESE]: 99999
}

export const NUMBER_FUNCTIONS = {
  [NUMBER_TYPES.KOREAN]: getKoreanNumber,
  [NUMBER_TYPES.CHINESE]: getChineseNumber
}

export const KOREAN_NUMBERS_DISPLAYED = {
  1: '하나',
  2: '둘',
  3: '셋',
  4: '넷',
  5: '다섯',
  6: '여섯',
  7: '일곱',
  8: '여덟',
  9: '아홉',
  10: '열',
  11: '열하나',
  20: '스물',
  30: '서른',
  40: '마흔',
  50: '쉰',
  60: '예순',
  70: '일흔',
  80: '여든',
  90: '아흔'
}
export const CHINESE_NUMBERS_DISPLAYED = {
  0: '공/연',
  1: '일',
  2: '이',
  3: '삼',
  4: '사',
  5: '오',
  6: '육',
  7: '칠',
  8: '팔',
  9: '구',
  10: '십',
  100: '백',
  1000: '천',
  10000: '만'
}

export const KOREAN_NUMBERS = {
  units: {
    0: '',
    1: '하나',
    2: '둘',
    3: '셋',
    4: '넷',
    5: '다섯',
    6: '여섯',
    7: '일곱',
    8: '여덟',
    9: '아홉'
  },
  tens: {
    1: '열',
    2: '스물',
    3: '서른',
    4: '마흔',
    5: '쉰',
    6: '예순',
    7: '일흔',
    8: '여든',
    9: '아흔'
  }
}

export const CHINESE_NUMBERS = {
  0: {
    0: '',
    1: '일',
    2: '이',
    3: '삼',
    4: '사',
    5: '오',
    6: '육',
    7: '칠',
    8: '팔',
    9: '구'
  },
  1: '십',
  2: '백',
  3: '천',
  4: '만',
  5: '십',
  6: '백'
}

export const QUIZZ_SKILL_TYPE = {
  WRITTEN: 'written',
  LISTENING: 'listening'
}

export const QUIZZ_TYPE = {
  NUMBERS: 'numbers',
  DATES: 'dates'
}

export const DATE_QUIZZ_TYPES = {
  DATE: 'date',
  TIME: 'time'
}

export const ROW_PLACEHOLDER = {
  [QUIZZ_TYPE.DATES]: {
    [DATE_QUIZZ_TYPES.DATE]: {
      [QUIZZ_SKILL_TYPE.LISTENING]: '02/05/2000',
      [QUIZZ_SKILL_TYPE.WRITTEN]: '이천년 오월 이일'
    },
    [DATE_QUIZZ_TYPES.TIME]: {
      [QUIZZ_SKILL_TYPE.LISTENING]: '05:10',
      [QUIZZ_SKILL_TYPE.WRITTEN]: '다섯시 십분'
    }
  },
  [QUIZZ_TYPE.NUMBERS]: {
    [NUMBER_TYPES.CHINESE]: {
      [QUIZZ_SKILL_TYPE.LISTENING]: '10300',
      [QUIZZ_SKILL_TYPE.WRITTEN]: '일만 삼백'
    },
    [NUMBER_TYPES.KOREAN]: {
      [QUIZZ_SKILL_TYPE.LISTENING]: '10',
      [QUIZZ_SKILL_TYPE.WRITTEN]: '열'
    }
  }

}
