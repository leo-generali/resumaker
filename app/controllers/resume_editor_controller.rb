class ResumeEditorController < ApplicationController
  def generate_pdf
    html = render_to_string 'resume_templates/_template_one.html.erb', layout: false

    pdf = WickedPdf.new.pdf_from_string(html,
      {
        page_height: '11in',
        page_width: '8.5in',
        margin: {
          top:    0,
          bottom: 0,
          left:   0,
          right:  0 },
        lowquality: true,
        zoom: 1,
        dpi: 90
      }
    )

    send_data(pdf, filename: 'filename.pdf', type: 'application/pdf')
  end
end
