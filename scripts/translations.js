// ============================================================
//  rils-plutonium-kr — translations.js
//  모든 번역 데이터를 여기서 관리합니다.
// ============================================================

// ----------------------------------------------------------
//  UI 문자열 (이미지 + 버튼 등)
// ----------------------------------------------------------
export const UI = {
  "plutonium import": "플루토늄 가져오기",

  // 임포터 헤더
  "1: Choose Importer": "1: 임포터 선택",
  "2: Choose Sources": "2: 소스 선택",
  "3: Choose Content": "3: 콘텐츠 선택",

  // 임포터 카테고리
  Actions: "행동",
  Backgrounds: "배경",
  "Character Creation Options": "캐릭터 생성 옵션",
  "Classes & Subclasses": "클래스 & 서브클래스",
  "Class & Subclass Features": "클래스 & 서브클래스 특성",
  "Conditions & Diseases": "상태이상 & 질병",
  "Creature Features": "크리처 특성",
  "Cults & Supernatural Boons": "컬트 & 초자연적 혜택",
  Feats: "재주",
  Facilities: "시설",
  Items: "아이템",
  "Other Options & Features": "기타 옵션 & 특성",
  Psionics: "사이오닉스",
  "Species & Subspecies": "종족 & 서브종족",
  Spells: "주문",
  "Supernatural Gifts & Rewards": "초자연적 선물 & 보상",

  // 공통 버튼
  "Open Importer": "임포터 열기",
  Import: "가져오기",
  Ok: "확인",
  OK: "확인",
  Cancel: "취소",
  Skip: "건너뛰기",
  Confirm: "확인",
  Yes: "예",
  No: "아니오",
  Close: "닫기",
  Reset: "초기화",
  Delete: "삭제",
  "Find items...": "아이템 검색...",
  Name: "이름",
  Type: "종류",

  // HP 증가 방식
  "Select Hit Points Increase Mode": "HP 증가 방식 선택",
  "Take Average": "평균값 선택",
  "Minimum Value": "최솟값",
  "Maximum Value": "최댓값",
  Roll: "주사위 굴리기",
  "Roll (Custom Formula)": "주사위 굴리기 (커스텀 공식)",
  "Do Not Increase HP": "HP 증가 안 함",

  // 기술 숙련 선택 다이얼로그
  "Skill Proficiencies": "기술 숙련",

  // 임포트 상태
  "Import Complete": "가져오기 완료",
  "Finalized Import": "가져오기 완료됨",

  // 시작 장비
  "(select an item)": "(아이템을 선택해주세요...)",
  "Standard Starting Equipment": "기본 시작 장비",
  "Gold Alternative/Shop": "골드 대안 / 상점",
  "Choose Item Set": "아이템 세트 선택",
  "Set Item Filters": "아이템 필터 설정",
  "Alternatively,": "대신,",
  "add starting gold and skip to the shop.":
    "시작 골드를 추가하고 상점으로 건너뜁니다.",

  // 저장되지 않은 선택
  "Unsaved Choices": "저장되지 않은 선택",
  "You have not made all available choices. Are you sure you want to continue?":
    "아직 선택하지 않은 항목이 있습니다. 계속하시겠습니까?",

  // 주문서
  "Populate Spellbook": "주문서 채우기",

  // 능력치 점수 향상
  "Ability Score Improvement": "능력치 점수 향상",
  Feat: "재주",
  "Choose Feat": "재주 선택",

  // 기타 자주 쓰는 UI
  "Level Up": "레벨 업",
  "Choose Background": "배경 선택",
  "Choose Class": "클래스 선택",
  "Choose Species": "종족 선택",
  "Choose Subclass": "서브클래스 선택",
  "Starting Equipment": "시작 장비",
  "Hit Points": "HP",
  "Hit Dice": "히트 다이스",
  "Proficiency Bonus": "숙련 보너스",
  "Saving Throws": "내성 굴림",
  "Tool Proficiencies": "도구 숙련",
  "Armor Proficiencies": "갑옷 숙련",
  "Weapon Proficiencies": "무기 숙련",
  Languages: "언어",
  Equipment: "장비",
  "Features & Traits": "특성 & 특징",
  "Choose a Fighting Style": "전투 유파 선택",
  "Fighting Style": "전투 유파",
  "Choose Item — Martial Weapon": "아이템 선택 — 군용 무기",
};

// ----------------------------------------------------------
//  능력치
// ----------------------------------------------------------
export const ABILITIES = {
  Strength: "근력",
  Dexterity: "민첩",
  Constitution: "건강",
  Intelligence: "지능",
  Wisdom: "지혜",
  Charisma: "매력",
  // 약어 (단독 표시될 때)
  STR: "근력",
  Str: "근력",
  DEX: "민첩",
  Dex: "민첩",
  CON: "건강",
  Con: "건강",
  INT: "지능",
  Int: "지능",
  WIS: "지혜",
  Wis: "지혜",
  CHA: "매력",
  Cha: "매력",
  // 괄호 포함
  "(Str)": "(근력)",
  "(str)": "(근력)",
  "(Dex)": "(민첩)",
  "(dex)": "(민첩)",
  "(Con)": "(건강)",
  "(con)": "(건강)",
  "(Int)": "(지능)",
  "(int)": "(지능)",
  "(Wis)": "(지혜)",
  "(wis)": "(지혜)",
  "(Cha)": "(매력)",
  "(cha)": "(매력)",
};

// ----------------------------------------------------------
//  기술 (능력치 약어 포함 형태도 함께 등록)
// ----------------------------------------------------------
export const SKILLS = {
  Acrobatics: "곡예",
  "Animal Handling": "동물 조련",
  Arcana: "비전학",
  Athletics: "운동",
  Deception: "기만",
  History: "역사학",
  Insight: "통찰",
  Intimidation: "위협",
  Investigation: "수사",
  Medicine: "의학",
  Nature: "자연학",
  Perception: "지각",
  Performance: "공연",
  Persuasion: "설득",
  Religion: "종교학",
  "Sleight of Hand": "손속임",
  Stealth: "은신",
  Survival: "생존",
  // 능력치 약어 포함 형태
  "Acrobatics (Dex)": "곡예 (민첩)",
  "Animal Handling (Wis)": "동물 조련 (지혜)",
  "Arcana (Int)": "비전학 (지능)",
  "Athletics (Str)": "운동 (근력)",
  "Deception (Cha)": "기만 (매력)",
  "History (Int)": "역사학 (지능)",
  "Insight (Wis)": "통찰 (지혜)",
  "Intimidation (Cha)": "위협 (매력)",
  "Investigation (Int)": "수사 (지능)",
  "Medicine (Wis)": "의학 (지혜)",
  "Nature (Int)": "자연학 (지능)",
  "Perception (Wis)": "지각 (지혜)",
  "Performance (Cha)": "공연 (매력)",
  "Persuasion (Cha)": "설득 (매력)",
  "Religion (Int)": "종교학 (지능)",
  "Sleight of Hand (Dex)": "손속임 (민첩)",
  "Stealth (Dex)": "은신 (민첩)",
  "Survival (Wis)": "생존 (지혜)",
};

// ----------------------------------------------------------
//  클래스
// ----------------------------------------------------------
export const CLASSES = {
  Artificer: "아티피서",
  Barbarian: "바바리안",
  Bard: "바드",
  Cleric: "클레릭",
  Druid: "드루이드",
  Fighter: "파이터",
  Monk: "몽크",
  Paladin: "팔라딘",
  Ranger: "레인저",
  Rogue: "로그",
  Sorcerer: "소서러",
  Warlock: "워락",
  Wizard: "위자드",
};

// ----------------------------------------------------------
//  서브클래스 (PHB / XGTE / TCOE 기준)
// ----------------------------------------------------------
export const SUBCLASSES = {
  // ── Artificer ──────────────────────────────────────────
  Alchemist: "연금술사",
  Armorer: "갑옷 장인",
  Artillerist: "포격수",
  "Battle Smith": "전투 대장장이",

  // ── Barbarian ──────────────────────────────────────────
  "Path of the Berserker": "광전사의 길",
  "Path of the Totem Warrior": "토템 전사의 길",
  "Path of the Battlerager": "전투격노자의 길",
  "Path of the Ancestral Guardian": "조상령의 길",
  "Path of the Storm Herald": "폭풍 전령의 길",
  "Path of the Zealot": "광신도의 길",
  "Path of the Beast": "야수의 길",
  "Path of Wild Magic": "야생 마법의 길",
  "Path of the Giant": "거인의 길",

  // ── Bard ───────────────────────────────────────────────
  "College of Lore": "전승 학파",
  "College of Valor": "용맹 학파",
  "College of Glamour": "매혹 학파",
  "College of Swords": "검 학파",
  "College of Whispers": "속삭임 학파",
  "College of Creation": "창조 학파",
  "College of Eloquence": "웅변 학파",
  "College of Spirits": "영혼 학파",

  // ── Cleric ─────────────────────────────────────────────
  "Knowledge Domain": "지식 권역",
  "Life Domain": "생명 권역",
  "Light Domain": "광휘 권역",
  "Nature Domain": "자연 권역",
  "Tempest Domain": "폭풍 권역",
  "Trickery Domain": "기만 권역",
  "War Domain": "전쟁 권역",
  "Arcana Domain": "비전 권역",
  "Death Domain": "죽음 권역",
  "Forge Domain": "제련 권역",
  "Grave Domain": "무덤 권역",
  "Order Domain": "질서 권역",
  "Peace Domain": "평화 권역",
  "Twilight Domain": "황혼 권역",

  // ── Druid ──────────────────────────────────────────────
  "Circle of the Land": "대지의 회합",
  "Circle of the Moon": "달의 회합",
  "Circle of Dreams": "꿈의 회합",
  "Circle of the Shepherd": "목자의 회합",
  "Circle of Spores": "포자의 회합",
  "Circle of Stars": "별의 회합",
  "Circle of Wildfire": "들불의 회합",

  // ── Fighter ────────────────────────────────────────────
  "Battle Master": "배틀 마스터",
  Champion: "챔피언",
  "Eldritch Knight": "엘드리치 나이트",
  "Arcane Archer": "아케인 아처",
  Cavalier: "캐벌리어",
  Samurai: "사무라이",
  "Echo Knight": "에코 나이트",
  "Psi Warrior": "사이 워리어",
  "Rune Knight": "룬 나이트",
  "Purple Dragon Knight": "퍼플 드래곤 나이트",
  Banneret: "군기지휘관",

  // ── Monk ───────────────────────────────────────────────
  "Way of the Open Hand": "열린 손의 길",
  "Way of Shadow": "그림자의 길",
  "Way of the Four Elements": "사대원소의 길",
  "Way of the Long Death": "긴 죽음의 길",
  "Way of the Sun Soul": "태양혼의 길",
  "Way of the Drunken Master": "취권의 길",
  "Way of the Kensei": "검성의 길",
  "Way of the Astral Self": "아스트랄 셀프의 길",
  "Way of Mercy": "자비의 길",

  // ── Paladin ────────────────────────────────────────────
  "Oath of Devotion": "헌신의 맹세",
  "Oath of the Ancients": "선조의 맹세",
  "Oath of Vengeance": "복수의 맹세",
  "Oath of the Crown": "왕관의 맹세",
  "Oath of Conquest": "정복의 맹세",
  "Oath of Redemption": "구원의 맹세",
  "Oath of Glory": "영광의 맹세",
  "Oath of the Watchers": "감시자의 맹세",
  Oathbreaker: "맹세파기자",

  // ── Ranger ─────────────────────────────────────────────
  "Beast Master": "야수 조련사",
  Hunter: "사냥꾼",
  "Gloom Stalker": "어둠 추적자",
  "Horizon Walker": "지평선 방랑자",
  "Monster Slayer": "몬스터 처단자",
  "Fey Wanderer": "페이 방랑자",
  Swarmkeeper: "군집 수호자",
  Drakewarden: "드레이크 수호자",

  // ── Rogue ──────────────────────────────────────────────
  "Arcane Trickster": "비전 협잡꾼",
  Assassin: "암살자",
  Thief: "도둑",
  Mastermind: "두뇌",
  Swashbuckler: "검사",
  Inquisitive: "심문자",
  Phantom: "유령",
  Soulknife: "영혼의 칼",
  Scout: "척후병",

  // ── Sorcerer ───────────────────────────────────────────
  "Draconic Bloodline": "용의 혈통",
  "Wild Magic": "야생 마법",
  "Shadow Magic": "그림자 마법",
  "Storm Sorcery": "폭풍 마법",
  "Divine Soul": "신성한 영혼",
  "Aberrant Mind": "기괴한 정신",
  "Clockwork Soul": "시계태엽 영혼",
  "Lunar Sorcery": "달의 마법",

  // ── Warlock ────────────────────────────────────────────
  "The Archfey": "대요정",
  "The Fiend": "악마",
  "The Great Old One": "위대한 옛것",
  "The Undying": "불멸자",
  "The Celestial": "천상체",
  "The Hexblade": "주술칼날",
  "The Fathomless": "심연의 존재",
  "The Genie": "지니",
  "The Undead": "불사자",

  // ── Wizard ─────────────────────────────────────────────
  "School of Abjuration": "방호학파",
  "School of Conjuration": "조형학파",
  "School of Divination": "예지학파",
  "School of Enchantment": "환혹학파",
  "School of Evocation": "방출학파",
  "School of Illusion": "환영학파",
  "School of Necromancy": "사령학파",
  "School of Transmutation": "변환학파",
  "School of War Magic": "전쟁 마법",
  "School of Bladesinging": "칼날노래",
  "Chronurgy Magic": "시간 조작 마법",
  "Graviturgy Magic": "중력 조작 마법",
  "Order of Scribes": "서기 조직",
};

// ----------------------------------------------------------
//  클래스 특성 / 주요 피처
// ----------------------------------------------------------
export const FEATURES = {
  // Barbarian
  Rage: "분노",
  "Unarmored Defense": "비무장 방어",
  "Reckless Attack": "무모한 공격",
  "Danger Sense": "위험 감지",
  "Extra Attack": "추가 공격",
  "Fast Movement": "빠른 이동",
  "Feral Instinct": "야생의 본능",
  "Brutal Critical": "잔혹한 치명타",
  "Relentless Rage": "끈질긴 분노",
  "Persistent Rage": "지속적인 분노",
  "Indomitable Might": "굴하지 않는 힘",
  "Primal Champion": "원시의 챔피언",
  // Bard
  "Bardic Inspiration": "음유시인의 영감",
  "Jack of All Trades": "팔방미인",
  "Song of Rest": "휴식의 노래",
  Expertise: "전문화",
  "Font of Inspiration": "영감의 원천",
  Countercharm: "반마법",
  "Magical Secrets": "마법의 비밀",
  "Superior Inspiration": "탁월한 영감",
  // Cleric
  Spellcasting: "주문시전",
  "Divine Domain": "신성 영역",
  "Channel Divinity": "신성한 힘 사용",
  "Destroy Undead": "언데드 파괴",
  "Divine Intervention": "신성한 개입",
  // Druid
  Druidic: "드루이드어",
  "Wild Shape": "야생 변신",
  "Timeless Body": "불변의 몸",
  "Beast Spells": "야수 주문",
  Archdruid: "아치드루이드",
  // Fighter
  "Fighting Style": "전투 유파",
  "Second Wind": "두 번째 바람",
  "Action Surge": "행동 급증",
  "Martial Archetype": "전투 원형",
  Indomitable: "불굴",
  // Monk
  "Unarmored Movement": "비무장 이동",
  "Martial Arts": "무술",
  Ki: "기",
  "Stunning Strike": "기절 공격",
  "Ki-Empowered Strikes": "기 강화 공격",
  Evasion: "회피",
  "Stillness of Mind": "마음의 고요",
  "Purity of Body": "몸의 청정",
  "Tongue of the Sun and Moon": "해와 달의 언어",
  "Diamond Soul": "다이아몬드 영혼",
  "Timeless Body (Monk)": "불변의 몸",
  "Empty Body": "빈 몸",
  "Perfect Self": "완전한 자아",
  "Deflect Missiles": "발사체 편향",
  "Slow Fall": "낙하 감속",
  "Step of the Wind": "바람의 걸음",
  // Paladin
  "Lay on Hands": "안수 치유",
  "Divine Smite": "신성한 강타",
  "Divine Health": "신성한 건강",
  "Sacred Oath": "신성한 맹세",
  "Aura of Protection": "수호의 오라",
  "Aura of Courage": "용기의 오라",
  "Improved Divine Smite": "강화된 신성한 강타",
  "Cleansing Touch": "정화의 손길",
  // Ranger
  "Favored Enemy": "선호하는 적",
  "Natural Explorer": "자연의 탐험가",
  "Ranger Archetype": "레인저 원형",
  "Primeval Awareness": "원시의 직관",
  Vanish: "은신",
  "Feral Senses": "야생의 감각",
  "Foe Slayer": "적 처치자",
  // Rogue
  "Sneak Attack": "기습 공격",
  "Thieves' Cant": "도적 은어",
  "Cunning Action": "교활한 행동",
  "Roguish Archetype": "도적 원형",
  "Uncanny Dodge": "귀신같은 회피",
  "Reliable Talent": "믿을 만한 재능",
  Blindsense: "맹인 감각",
  "Slippery Mind": "유연한 정신",
  Elusive: "포착 불가",
  "Stroke of Luck": "행운의 일격",
  // Sorcerer
  "Sorcerous Origin": "마법사의 기원",
  "Font of Magic": "마법의 원천",
  Metamagic: "상위 마법",
  "Sorcerous Restoration": "마법사의 회복",
  // Warlock
  "Otherworldly Patron": "이계의 후원자",
  "Pact Magic": "계약 마법",
  "Eldritch Invocations": "신비한 기도",
  "Pact Boon": "계약의 혜택",
  "Mystic Arcanum": "신비한 비전",
  "Eldritch Master": "신비한 달인",
  // Wizard
  "Arcane Recovery": "비전 회복",
  "Arcane Tradition": "비전 전통",
  "Spell Mastery": "주문 통달",
  "Signature Spells": "특기 주문",

  // 전투 유파 (Fighting Styles)
  Archery: "궁술 Archery",
  "Blind Fighting": "맹인 전투 Blind Fighting",
  Defense: "방어술 Defense",
  Dueling: "결투술 Dueling",
  "Great Weapon Fighting": "대형 무기 전투술 Great Weapon Fighting",
  Interception: "가로막기 Interception",
  Protection: "수호 Protection",
  "Superior Technique": "우월한 기술 Superior Technique",
  "Thrown Weapon Fighting": "투척 무기 전투술 Thrown Weapon Fighting",

  // 공통
  "Ability Score Improvement": "능력치 점수 향상",
  Proficiencies: "숙련",
  "Subclass Feature": "서브클래스 특성",
};

// ----------------------------------------------------------
//  피트 번역 — 여기에 key: value 형태로 추가하세요
//  예시: "Alert": "경계",
// ----------------------------------------------------------
export const FEATS = {
  Actor: "연기자",
  Alert: "경계심",
  Athlete: "운동선수",
  Charger: "돌격자",
  "Crossbow Expert": "석궁 전문가",
  "Defensive Duelist": "방어적 결투자",
  "Dual Wielder": "쌍수 전문가",
  "Dungeon Delver": "던전 탐색꾼",
  Durable: "튼튼함",
  "Elemental Adept": "원소 숙련자",
  Grappler: "잡기 전문가",
  "Great Weapon Master": "대형 무기의 달인",
  Healer: "치유사",
  "Heavily Armored": "중갑 사용자",
  "Heavy Armor Master": "중갑 달인",
  "Inspiring Leader": "탁월한 지도자",
  "Keen Mind": "예리한 정신",
  "Lightly Armored": "경갑 사용자",
  Linguist: "언어학자",
  Lucky: "행운아",
  "Mage Slayer": "마법사 살해자",
  "Magic Initiate": "마법 입문자",
  "Martial Adept": "무예 숙련자",
  "Medium Armor Master": "평갑 달인",
  Mobile: "기민함",
  "Moderately Armored": "평갑 사용자",
  "Mounted Combatant": "승마 전투자",
  Observant: "관찰자",
  "Polearm Master": "장대무기 달인",
  Resilient: "탄력성",
  "Ritual Caster": "의식 시전자",
  "Savage Attacker": "야만적인 공격자",
  Sentinel: "파수꾼",
  Sharpshooter: "지정사수",
  "Shield Master": "방패 달인",
  Skilled: "기술자",
  Skulker: "암습자",
  "Spell Sniper": "주문 저격수",
  "Tavern Brawler": "술집 싸움꾼",
  Tough: "끈질김",
  "War Caster": "전쟁 시전자",
  "Weapon Master": "무기 달인",
  WeaponMaster: "무기 달인", // 5etools 표기 변형 대응
};

// ----------------------------------------------------------
//  무기
// ----------------------------------------------------------
export const WEAPONS = {
  // 군용 무기 (Martial Weapons)
  Battleaxe: "전투 도끼 Battleaxe",
  Blowgun: "취관 Blowgun",
  "Double-bladed scimitar": "양날 언월도 Double-bladed scimitar",
  Flail: "도리깨 Flail",
  Glaive: "글레이브 Glaive",
  Greataxe: "대형 도끼 Greataxe",
  Greatsword: "대검 Greatsword",
  Halberd: "할버드 Halberd",
  "Hand crossbow": "손석궁 Hand crossbow",
  "Heavy crossbow": "중석궁 Heavy crossbow",
  Hoopak: "후팍 Hoopak",
  Lance: "창 Lance",
  Longbow: "장궁 Longbow",
  Longsword: "장검 Longsword",
  Maul: "거대 철퇴 Maul",
  Morningstar: "모닝스타 Morningstar",
  Net: "그물 Net",
  Pike: "파이크 Pike",
  Rapier: "레이피어 Rapier",
  Scimitar: "언월도 Scimitar",
  Shortsword: "단검 Shortsword",
  Trident: "삼지창 Trident",
  "War pick": "전투 곡괭이 War pick",
  Warhammer: "전투 망치 Warhammer",
  Whip: "채찍 Whip",
};

// ----------------------------------------------------------
//  정규식 기반 패턴 (숫자 등 동적 텍스트)
// ----------------------------------------------------------
export const PATTERNS = [
  {
    // "Choose two Skill Proficiencies:" 등 숫자가 다른 경우
    regex: /^Choose (one|two|three|four|five|six) Skill Proficien(cy|cies):$/i,
    fn: (m) => {
      const numMap = {
        one: "하나의",
        two: "두 가지",
        three: "세 가지",
        four: "네 가지",
        five: "다섯 가지",
        six: "여섯 가지",
      };
      return `${numMap[m[1].toLowerCase()] ?? m[1]} 기술 숙련을 선택하세요:`;
    },
  },
  {
    // "Ability Score Improvement—Level 4"
    regex: /^Ability Score Improvement[—-]Level (\d+)$/,
    fn: (m) => `능력치 점수 향상—레벨 ${m[1]}`,
  },
  {
    // "Do you want to populate the spellbook for this class (for class levels 1-5)?"
    regex:
      /^Do you want to populate the spellbook for this class \(for class levels (\d+)-(\d+)\)\?$/,
    fn: (m) =>
      `이 클래스의 주문서를 채우시겠습니까? (클래스 레벨 ${m[1]}-${m[2]})`,
  },
  {
    // "Level N" 단독 표시
    regex: /^Level (\d+)$/,
    fn: (m) => `레벨 ${m[1]}`,
  },
];
