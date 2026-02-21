export interface PsiPower {
    _id: string;
    name: string;
    description: string;
    img: string;
}

export interface Character {
    _id: string;
    name: string;
    gender: string;
    img: string;
    psiPowers: PsiPower[];
}