class Aluno
  attr_reader :nome, :matricula

  attr_accessor :curso

  def initialize(nome, curso)
    @nome = nome
    @curso = curso
    @matricula = Matricula.new(1 + rand(100))
  end
end


class Matricula
  attr_reader :registro

  def initialize(registro)
    @registro = registro
  end

  def devolveRegistro
    puts("O registro do aluno é #{@registro}")
  end
end

victor = Aluno.new('Victor', 'Ruby')
puts(victor.matricula.devolveRegistro)


