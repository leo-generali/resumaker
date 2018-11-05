class ResumeEditorController < ApplicationController
  def generate_pdf
    generated_resume = params["body"]
    html = render_to_string 'resume_templates/_template.html.erb', locals: {resume: generated_resume.html_safe}, layout: false

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
        dpi: 90,
        encoding: 'utf8'
      }
    )

    send_data(pdf, filename: 'filename.pdf', type: 'application/pdf')
  end
end
