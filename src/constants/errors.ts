import RoutePath from './path';

const ERRORS: ErrorMap = {
  400: {
    message: '잘못된 요청입니다.💦',
    redirectState: {
      redirect: false,
    },
  },
  401: {
    message: '잘못된 인증 정보입니다. 재로그인 해주세요.💦',
    redirectState: {
      redirect: true,
      path: RoutePath.LOGIN,
    },
  },
  403: {
    message: '접근이 금지되었습니다. 재로그인 후에도 같은 문제 발생 시, 개발자에게 문의해주세요.🐛',
    redirectState: {
      redirect: true,
      path: RoutePath.LOGIN,
    },
  },
  404: {
    message: '요청한 리소스나 페이지를 찾을 수 없습니다.💦',
    redirectState: {
      redirect: false,
    },
  },
  409: {
    message: '충돌이 발생했습니다. 새로운 ID를 생성하거나 업데이트해야합니다.💦',
    redirectState: {
      redirect: false,
    },
  },
  410: {
    message: '요청한 리소스가 더 이상 존재하지 않습니다.💦',
    redirectState: {
      redirect: false,
    },
  },
  412: {
    message:
      '사전 조건 실패로 요청이 거부되었습니다. 계속해서 같은 문제 발생 시, 개발자에게 문의해주세요.🐛',
    redirectState: {
      redirect: false,
    },
  },
  429: {
    message: '요청이 너무 많습니다. 계속해서 같은 문제 발생 시, 개발자에게 문의해주세요.🐛',
    redirectState: {
      redirect: false,
    },
  },
  500: {
    message: '서버에 오류가 발생했습니다. 계속해서 같은 문제 발생 시, 개발자에게 문의해주세요.🐛',
    redirectState: {
      redirect: false,
    },
  },
  0: {
    message:
      '예상치 못한 오류가 발생했습니다. 계속해서 같은 문제 발생 시, 개발자에게 문의해주세요.🐛',
    redirectState: {
      redirect: false,
    },
  },
} as const;

type RedirectType = {
  redirect: true;
  path: string;
};

type NoRedirectType = {
  redirect: false;
};

interface ErrorMap {
  [code: number]: ErrorResult;
}

export interface ErrorResult {
  message: string;
  redirectState: RedirectType | NoRedirectType;
}

export default ERRORS;
