import * as XLSX from "xlsx";

export function parseQuestionsExcel(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(sheet, { defval: "" });

        const parsed = rows.map((row, i) => {
          if (!row.question_text || !row.section_type) {
            throw new Error(`Invalid row at line ${i + 2}`);
          }

          return {
            id: crypto.randomUUID(),
            question_text: row.question_text.trim(),
            section_type: row.section_type.toUpperCase(),
            option_a: row.option_a || null,
            option_b: row.option_b || null,
            option_c: row.option_c || null,
            option_d: row.option_d || null,
            correct_option: row.correct_option || null,
            created_at: new Date().toISOString(),
          };
        });

        resolve(parsed);
      } catch (err) {
        reject(err);
      }
    };

    reader.readAsArrayBuffer(file);
  });
}
