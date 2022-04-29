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
  units_time: {
    0: '',
    1: '한',
    2: '두',
    3: '세',
    4: '네',
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

export const QUIZ_SKILL_TYPE = {
  WRITTEN: 'written',
  LISTENING: 'listening'
}

export const QUIZ_TYPE = {
  NUMBERS: 'numbers',
  DATES: 'dates'
}

export const DATE_QUIZ_TYPES = {
  DATE: 'date',
  TIME: 'time'
}

export const TIME_PERIOD = {
  1: 'AM',
  2: 'PM'
}

export const TIME_PERIOD_KOREAN = {
  1: '오전',
  2: '오후'
}

export const ROW_PLACEHOLDER = {
  [QUIZ_TYPE.DATES]: {
    [DATE_QUIZ_TYPES.DATE]: {
      [QUIZ_SKILL_TYPE.LISTENING]: '02/05/2000',
      [QUIZ_SKILL_TYPE.WRITTEN]: '이천년 오월 이일'
    },
    [DATE_QUIZ_TYPES.TIME]: {
      [QUIZ_SKILL_TYPE.LISTENING]: '05:10 PM',
      [QUIZ_SKILL_TYPE.WRITTEN]: '오후 다섯시 십분'
    }
  },
  [QUIZ_TYPE.NUMBERS]: {
    [NUMBER_TYPES.CHINESE]: {
      [QUIZ_SKILL_TYPE.LISTENING]: '10300',
      [QUIZ_SKILL_TYPE.WRITTEN]: '일만 삼백'
    },
    [NUMBER_TYPES.KOREAN]: {
      [QUIZ_SKILL_TYPE.LISTENING]: '10',
      [QUIZ_SKILL_TYPE.WRITTEN]: '열'
    }
  }

}
