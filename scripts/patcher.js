// ============================================================
//  rils-plutonium-kr — patcher.js
//  Plutonium UI를 한국어로 DOM 패치합니다.
// ============================================================

import { UI, ABILITIES, SKILLS, CLASSES, SUBCLASSES, FEATURES, FEATS, WEAPONS, LANGUAGES, BACKGROUNDS, PATTERNS } from "./translations.js";

// 모든 사전식 번역을 하나로 합칩니다
const ALL = {
  ...UI,
  ...ABILITIES,
  ...SKILLS,
  ...CLASSES,
  ...SUBCLASSES,
  ...FEATURES,
  ...FEATS,
  ...WEAPONS,
  ...LANGUAGES,
  ...BACKGROUNDS,
};

// ----------------------------------------------------------
//  텍스트 번역 함수
// ----------------------------------------------------------
function translate(text) {
  const trimmed = text.trim();
  if (!trimmed) return null;

  // 완전 일치
  if (ALL[trimmed] !== undefined) {
    return text.replace(trimmed, ALL[trimmed]);
  }

  // 정규식 패턴
  for (const { regex, fn } of PATTERNS) {
    const m = trimmed.match(regex);
    if (m) return text.replace(trimmed, fn(m));
  }

  return null;
}

// ----------------------------------------------------------
//  DOM 노드 순회 패치 (텍스트 노드만 교체)
// ----------------------------------------------------------
const SKIP_TAGS = new Set(["INPUT", "TEXTAREA", "SCRIPT", "STYLE", "CODE", "PRE"]);

function patchNode(node) {
  if (!node) return;

  if (node.nodeType === Node.TEXT_NODE) {
    const result = translate(node.textContent);
    if (result !== null) node.textContent = result;
    return;
  }

  if (node.nodeType === Node.ELEMENT_NODE) {
    if (SKIP_TAGS.has(node.tagName)) return;
    for (const child of Array.from(node.childNodes)) {
      patchNode(child);
    }
  }
}

// ----------------------------------------------------------
//  Application v1 렌더 훅
// ----------------------------------------------------------
Hooks.on("renderApplication", (_app, html) => {
  const el = (html instanceof jQuery) ? html[0] : (html?.element ?? html);
  if (el instanceof HTMLElement) patchNode(el);
});

// ----------------------------------------------------------
//  MutationObserver: Plutonium이 동적으로 렌더하는 목록 처리
//  (임포터 스크롤 목록, 주문/피트/클래스 선택 항목 등)
// ----------------------------------------------------------
Hooks.once("ready", () => {
  const observer = new MutationObserver((mutations) => {
    for (const { addedNodes } of mutations) {
      for (const node of addedNodes) {
        patchNode(node);
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
