# 카카오같이가치 클론

카카오같이가치 사이트를 각기 다른 방법으로 작업하기

1. 퍼블리싱
2. 리액트 (예정)
3. 타입스크립트 (예정)
4. Next.js (예정)

## 프로젝트 세팅 순서

### 1. React + TypeScript + Vite로 작업 시작

    - npm create vite@latest ./ --template react-ts

### 2. .env 생성

    - 미리 생성

### 3. 라이브러리 설치

    - npm i sass
    - npm i axios
    - npm i react-router-dom

### 4. prettier 설정

    - .prettierrc.json 생성 및 수정

```json
{
  "singleQuote": false,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "avoid",
  "endOfLine": "auto"
}
```

### 5. eslint 관련 설치

- `npm i -D eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser`

| 패키지                           | 설명                                                                              | 비고          |
| -------------------------------- | --------------------------------------------------------------------------------- | ------------- |
| eslint                           | ESLint 코어 패키지 / 코드 품질 확인 및 버그, 안티패턴(Anti-pattern)을 감지        |
| prettier                         | Prettier 코어 패키지 / 코드 스타일 및 포맷팅 관리, 일관된 코드 스타일을 적용 가능 |
| eslint-plugin-react              | React 지원 플러그인, 문법 분석 및 검사 지원                                       |
| eslint-config-prettier           | ESLint와 Prettier의 충돌 방지                                                     |
| eslint-plugin-prettier           | Prettier 규칙을 ESLint 규칙으로 통합                                              |
| @typescript-eslint/eslint-plugin | 타입스크립트 지원 플러그인                                                        |
| @typescript-eslint/parser        | 타입스크립트 코드 분석 및 검사 지원                                               |
| eslint-plugin-react-hooks        | React Hooks 사용 규칙을 강제, 실수를 방지에 도움이 되는 규칙 제공 Vite에 포함됨   | vite에 포함됨 |
| eslint-plugin-react-refresh      | React Refresh 사용 규칙 제공 Vite에 포함됨                                        | vite에 포함됨 |

#### 5.1 eslintrc 설정

- .eslintrc.json 파일을 생성 및 수정

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": ["react", "prettier"],
  "parserOptions": {
    "parser": "@typescript-eslint/parser"
  }
}
```

## 퍼블리싱 작업 준비

- public > www >

  - apis
  - assets
  - css
  - images
  - js
  - scss
  - `index.html`
    - 기초 작업

- 작업영역 나누기
- `reset.css` `common.css` 사용글꼴 이미지 등 준비

## 해당 사이트를 클론하면서 개선한 부분

- header 영역 우측의 아이콘의 포커스 영역이 서로 동일하지 않은 부분을 개선함
- header 영역 우측의 아이콘 그룹의 간격이 서로 동일하지 않은 부분을 개선함

- main 영역 최상단 section 콘텐츠에 `overflow: hidden;` 사용으로 사라진 포커스를 개선함

---

# 수정해야할 과제

bold의 font-weight가 2종이다. 400, 600
열리면 스크롤이 상단으로 가는 문제

# 마주한 문제

- 이벤트 전파
