// Export utilities for CSV, Excel, and PDF generation
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';

export function exportToCSV(data: any[], filename: string) {
  if (!data || data.length === 0) return;
  const worksheet = XLSX.utils.json_to_sheet(data);
  const csvOutput = XLSX.utils.sheet_to_csv(worksheet);
  const blob = new Blob([csvOutput], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', `${filename}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function exportToExcel(sheets: Record<string, any[]>, filename: string) {
  const workbook = XLSX.utils.book_new();
  Object.entries(sheets).forEach(([sheetName, sheetData]) => {
    const worksheet = XLSX.utils.json_to_sheet(sheetData);
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName.substring(0, 31));
  });
  XLSX.writeFile(workbook, `${filename}.xlsx`);
}

export function generateCateringOrderPDF(
  eventName: string,
  eventDate: string,
  venue: string,
  bufferPercentage: number,
  calculations: Array<{
    dishName: string;
    category: string;
    dietary: string;
    confirmedQty: number;
    bufferQty: number;
    recommendedQty: number;
    unitCost: number;
    totalCost: number;
  }>
) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  // Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(190, 18, 60); // Primary burgundy
  doc.text('INVITEDECIDE — CATERING PREPARATION ORDER', 14, 20);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  doc.text(`Event: ${eventName}`, 14, 28);
  doc.text(`Date: ${eventDate} | Venue: ${venue}`, 14, 34);
  doc.text(`Configured Safety Buffer: +${bufferPercentage}%`, 14, 40);
  doc.text(`Generated On: ${new Date().toLocaleString()}`, 14, 46);

  doc.setLineWidth(0.5);
  doc.setDrawColor(200, 200, 200);
  doc.line(14, 50, pageWidth - 14, 50);

  // Table Headers
  let startY = 58;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(20, 20, 20);
  doc.text('Dish Name', 14, startY);
  doc.text('Category', 75, startY);
  doc.text('Type', 115, startY);
  doc.text('Confirmed', 135, startY);
  doc.text('Buffer', 155, startY);
  doc.text('Total Prep Qty', 172, startY);

  doc.line(14, startY + 3, pageWidth - 14, startY + 3);
  startY += 9;

  let grandTotalCost = 0;

  // Table Rows
  doc.setFont('helvetica', 'normal');
  calculations.forEach((calc, idx) => {
    if (startY > 270) {
      doc.addPage();
      startY = 20;
    }

    doc.text(calc.dishName.substring(0, 32), 14, startY);
    doc.text(calc.category.substring(0, 20), 75, startY);
    doc.text(calc.dietary, 115, startY);
    doc.text(String(calc.confirmedQty), 135, startY);
    doc.text(`+${calc.bufferQty}`, 155, startY);

    doc.setFont('helvetica', 'bold');
    doc.text(String(calc.recommendedQty), 175, startY);
    doc.setFont('helvetica', 'normal');

    grandTotalCost += calc.totalCost;
    startY += 7;
  });

  // Footer / Total
  startY += 5;
  doc.line(14, startY, pageWidth - 14, startY);
  startY += 8;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text(`Total Estimated Catering Expenditure: Rs. ${grandTotalCost.toLocaleString('en-IN')}`, 14, startY);

  doc.save(`${eventName.replace(/[^a-zA-Z0-9]/g, '_')}_Catering_Sheet.pdf`);
}
