export interface ExerciseTwoTableModel {
  index: number;
  processedParagraph: string;
  alphabetOccurrences: AlphabetOccurrence[];
  numberAccumulator: number;
}

export interface AlphabetOccurrence {
  character: string;
  occurrenceCounter: number;
}
