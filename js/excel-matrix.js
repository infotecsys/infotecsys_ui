/**
 * Microsoft 365 Excel Comparison Matrix Controller
 * Interactive cell selection, formula bar updates, coordinate tracking & spreadsheet interactions
 */

export function initExcelMatrix() {
  const container = document.querySelector('.excel-workbook-container');
  if (!container) return;

  const nameBox = document.getElementById('excel-name-box');
  const formulaDisplay = document.getElementById('excel-formula-display');
  const rows = container.querySelectorAll('.excel-row');
  const cornerCell = container.querySelector('.excel-corner-cell');
  const addSheetBtn = container.querySelector('.excel-add-sheet-btn');

  const defaultFormula = `<span class="excel-fx-fn">=COMPARE</span><span class="excel-fx-paren">(</span><span class="excel-fx-param">Provider</span>=<span class="excel-fx-str">"Infotecsys"</span>, <span class="excel-fx-param">Code_IP</span>=<span class="excel-fx-val">100%_OWNED</span>, <span class="excel-fx-param">Seat_Tax</span>=<span class="excel-fx-val">0</span>, <span class="excel-fx-param">SLA</span>=<span class="excel-fx-str">"DIRECT_LEAD"</span><span class="excel-fx-paren">)</span>`;
  const defaultCellRange = "D1:D5";

  // Handle row selection
  rows.forEach(row => {
    row.addEventListener('click', () => {
      const cellId = row.getAttribute('data-cell') || 'D1';
      const formulaRaw = row.getAttribute('data-formula') || '';

      rows.forEach(r => r.classList.remove('active-row'));
      row.classList.add('active-row');

      if (nameBox) {
        nameBox.textContent = cellId;
        nameBox.classList.add('scale-105');
        setTimeout(() => nameBox.classList.remove('scale-105'), 150);
      }

      if (formulaDisplay && formulaRaw) {
        const highlighted = formulaRaw
          .replace(/(=[A-Z_]+)/g, '<span class="excel-fx-fn">$1</span>')
          .replace(/(\(|\))/g, '<span class="excel-fx-paren">$1</span>')
          .replace(/([A-Za-z_]+)=/g, '<span class="excel-fx-param">$1</span>=')
          .replace(/("[^"]*")/g, '<span class="excel-fx-str">$1</span>')
          .replace(/=([A-Z0-9_%]+)([,)])/g, '=<span class="excel-fx-val">$1</span>$2');
        formulaDisplay.innerHTML = highlighted;
      }
    });

    // Coordinated Hover Highlighting
    row.addEventListener('mouseenter', () => {
      const rowNum = row.querySelector('.excel-row-num');
      if (rowNum) rowNum.classList.add('active-header');
    });

    row.addEventListener('mouseleave', () => {
      const rowNum = row.querySelector('.excel-row-num');
      if (rowNum) rowNum.classList.remove('active-header');
    });
  });

  // Corner cell click resets to full D1:D5 range
  if (cornerCell) {
    cornerCell.addEventListener('click', () => {
      rows.forEach(r => r.classList.remove('active-row'));
      if (nameBox) nameBox.textContent = defaultCellRange;
      if (formulaDisplay) formulaDisplay.innerHTML = defaultFormula;
    });
  }

  // Add sheet button
  if (addSheetBtn) {
    addSheetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (typeof window.triggerSimulatedAction === 'function') {
        window.triggerSimulatedAction('📊 Excel Workbook: Custom enterprise scoping sheet opened.');
      }
    });
  }
}

