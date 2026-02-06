export type TStatus = "default" | "crafted" | "equipped" | "noexist";

export type TGrade = {
  id_title: "basic" | "enhanced" | "superior" | "mastercrafted" | "grandmaster";
  id?: string;
  status: TStatus;
  level?: number;
};

export type TGears = {
  id_title:
    | "armor"
    | "boots"
    | "gauntlets"
    | "trousers"
    | "silverSword"
    | "steelSword"
    | "crossbow";
  grade: TGrade[];
};

export type TSchoolTable = {
  id: number;
  title: string;
  gear: TGears[];
};

export interface TLang {
  code: string;
  schools: {
    [key: string]: string;
  };
  gears: {
    [key: string]: string;
  };
  levels: {
    [key: string]: string;
  };
  popup: {
    title: string;
    crafted: string;
    equipped: string;
    default: string;
  };
  stonesLevel: string[];
  stones: {
    [key: string]: string;
  };
}
