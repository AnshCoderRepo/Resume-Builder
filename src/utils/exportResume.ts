import html2pdf from 'html2pdf.js';

export const exportAsPDF = async (elementId: string) => {
  try {
    const element = document.getElementById(elementId);
    if (!element) throw new Error('Resume element not found');
    
    const opt = {
      margin: [15, 15],
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        logging: false
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true
      }
    };

    const pdf = await html2pdf().set(opt).from(element).save();
    return pdf;
  } catch (error) {
    console.error('Failed to export PDF:', error);
    throw error;
  }
};