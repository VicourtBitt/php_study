def cadastrarAluno ()
  registros = []
  state = true
  while (state) do
    puts('[1] CADASTRAR')
    puts('[2] VER CADASTROS')
    puts('[3] SAIR ')
    current = gets.chomp.to_i

    if (current == 1)
      puts('Escreva o nome do aluno')
      nome = gets.chomp
      puts('Escreva o curso do aluno')
      curso = gets.chomp
      registros << { nome: nome, curso: curso }
      
    elsif (current == 2)
      registros.each do |registro|
        puts("#{registro[:nome]} - #{registro[:curso]}")
      end

    elsif (current == 3)
      puts('Saindo do programa')
      state = false

    else
      puts('Opção invalida') 
    end
  end
end

cadastrarAluno()